type Row = { feature: string; values: string[] };

export default function ComparisonTable({ headers, rows }: { headers: string[]; rows: Row[] }) {
  return (
    <div className="not-prose overflow-x-auto my-8 rounded-lg border border-line">
      <table className="w-full border-collapse text-sm bg-card">
        <thead>
          <tr className="bg-ink text-paper">
            <th className="text-left py-3 px-4 font-medium text-[0.82rem] tracking-wide">Feature</th>
            {headers.map((h) => (
              <th key={h} className="text-left py-3 px-4 font-medium text-[0.82rem] tracking-wide">
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((r, idx) => (
            <tr key={r.feature} className={idx % 2 === 0 ? 'bg-card' : 'bg-paper/40'}>
              <td className="py-3 px-4 font-medium text-ink border-t border-line whitespace-nowrap">{r.feature}</td>
              {r.values.map((v, i) => (
                <td key={i} className="py-3 px-4 text-ink-soft border-t border-line">{v}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
