import { useEffect, useMemo } from "react";

export default function VariantSelector({
  attributes = [],
  variants = [],
  selectedAttributes,
  setSelectedAttributes,
  setSelectedVariant,
  setIsUnavailable
}) {

  /* ========== BUILD VARIANT MAP ========== */
  const variantMap = useMemo(() => {
    const map = {};
    variants.forEach((v) => {
      const key = attributes.map((a) => v.attributes[a.id]).join("-");
      map[key] = v;
    });
    return map;
  }, [variants, attributes]);

  /* ========== INIT FIRST VARIANT ========== */
  useEffect(() => {
    if (!variants.length || !attributes.length) return;

    const first = variants[0];
    const init = {};
    attributes.forEach((a) => {
      init[a.id] = first.attributes[a.id];
    });

    setSelectedAttributes(init);
    setSelectedVariant(first);
    setIsUnavailable(false);
  }, [variants, attributes]);

  /* ========== SELECT VALUE ========== */
  const selectValue = (attrId, valueId) => {
    const updated = { ...selectedAttributes, [attrId]: valueId };
    setSelectedAttributes(updated);

    const key = attributes.map((a) => updated[a.id]).join("-");
    const match = variantMap[key];

    if (match) {
      setSelectedVariant(match);
      setIsUnavailable(false);
    } else {
      setSelectedVariant(null);
      setIsUnavailable(true);
    }
  };

  /* ========== CHECK AVAILABILITY ========== */
  const isValueAvailable = (attrId, valueId) => {
    const test = { ...selectedAttributes, [attrId]: valueId };

    return variants.some((v) =>
      attributes.every(
        (a) =>
          test[a.id] == null || v.attributes[a.id] === test[a.id]
      )
    );
  };

  /* ========== UI ========== */
  return (
    <div className="space-y-4">
      {attributes.map((attr) => (
        <div key={attr.id}>
          <p className="text-sm text-gray-400 mb-1">{attr.name}</p>

          <div className="flex gap-2 flex-wrap">
            {attr.values.map((val) => {
              const selected = selectedAttributes[attr.id] === val.id;
              const available = isValueAvailable(attr.id, val.id);

              return (
                <button
                  key={val.id}
                  onClick={() => selectValue(attr.id, val.id)}
                  className={`px-4 py-1 border rounded transition
                    ${
                      selected
                        ? "border-yellow-400 text-yellow-400"
                        : available
                        ? "border-white/30 hover:border-yellow-400"
                        : "border-red-500 text-red-400 opacity-60"
                    }`}
                >
                  {val.value}
                </button>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
}
