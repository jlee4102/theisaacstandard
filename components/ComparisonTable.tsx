type Row = { feature: string; values: string[] };

export default function ComparisonTable({ headers, rows }: { headers: string[]; rows: Row[] }) {
  return (
    <div className="not-prose overflow-x-auto my-6">
      <table className="w-full border-collapse text-sm">
        <thead>
          <tr className="border-b-2 border-ink/20">
            <th className="text-left py-3 pr-4 font-serif font-normal">Feature</th>
            {headers.map((h) => (
              <th key={h} className="text-left py-3 pr-4 font-serif font-normal">{h}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((r) => (
            <tr key={r.feature} className="border-b border-ink/10">
              <td className="py-3 pr-4 font-medium">{r.feature}</td>
              {r.values.map((v, i) => (
                <td key={i} className="py-3 pr-4 text-ink/80">{v}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
