import React from "react";

export default function App() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-6">
      {/* Logo */}
      <header className="w-full max-w-4xl flex items-center justify-center py-6">
        <h1 className="text-4xl font-bold text-blue-600">Mercado Livre</h1>
      </header>

      {/* Tela inicial */}
      <div className="w-full max-w-4xl bg-white rounded-2xl shadow-lg p-6 mt-4">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800">Painel Inicial</h2>

        {/* Opções de saque */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <button className="p-4 bg-blue-500 text-white rounded-xl shadow hover:scale-105 transition">Sacar via PIX</button>
          <button className="p-4 bg-green-500 text-white rounded-xl shadow hover:scale-105 transition">Sacar via TED</button>
          <button className="p-4 bg-yellow-500 text-white rounded-xl shadow hover:scale-105 transition">Sacar via Boleto</button>
        </div>

        {/* Tabela com valor */}
        <div className="overflow-x-auto">
          <table className="w-full text-left border border-gray-300 rounded-xl overflow-hidden">
            <thead className="bg-gray-200">
              <tr>
                <th className="p-3">Valor Disponível</th>
                <th className="p-3">Tempo Estimado para Saque</th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-white">
                <td className="p-3 font-semibold text-green-600">R$ 309,00</td>
                <td className="p-3 text-gray-700">17 horas</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
