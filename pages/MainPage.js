import { useState } from 'react';

export default function MainPage() {
  const cards = [
    { id: 1, name: '1', color: 'red' },
    { id: 2, name: '2', color: 'red' },
    { id: 3, name: '3', color: 'red' },
    { id: 4, name: '4', color: 'red' },
    { id: 5, name: '5', color: 'red' },
    { id: 6, name: '6', color: 'red' },
    { id: 7, name: '7', color: 'red' },
    { id: 8, name: '8', color: 'red' },
    { id: 9, name: '1', color: 'blue' },
    { id: 10, name: '2', color: 'blue' },
    { id: 11, name: '3', color: 'blue' },
    { id: 12, name: '4', color: 'blue' },
    { id: 13, name: '5', color: 'blue' },
    { id: 14, name: '6', color: 'blue' },
    { id: 15, name: '7', color: 'blue' },
    { id: 16, name: '8', color: 'blue' },
    { id: 17, name: '1', color: 'yellow' },
    { id: 18, name: '2', color: 'yellow' },
    { id: 19, name: '3', color: 'yellow' },
    { id: 20, name: '4', color: 'yellow' },
    { id: 21, name: '5', color: 'yellow' },
    { id: 22, name: '6', color: 'yellow' },
    { id: 23, name: '7', color: 'yellow' },
    { id: 24, name: '8', color: 'yellow' },
  ];

  return (
    <main className="flex items-center justify-center flex-col mt-10">
      <div className=" flex items-center justify-center mb-5 flex-col gap-5">
        <div className=" font-bold text-6xl">
          <span className="text-red-500">Metin2</span>
        </div>
        <div className=" font-bold text-3xl">
          Okey Cards <span className="text-blue-500">Helper</span>
        </div>
        <h6 className="font-bold text-sm">
          Know which cards remain in the deck
        </h6>
      </div>
      <div className="flex items-center justify-center mb-5 gap-5">
        <TablePoints1 />
        <TablePoints2 />
      </div>
      <div className="flex items-center flex-col justify-center bg-gray-300 rounded-xl p-6">
        <span className="font-bold text-lg mb-3">
          Introduce the cards you already saw
        </span>

        <div className="grid grid-cols-8 gap-1 mx-8 w-[500px] font-bold">
          {cards.map((card) => (
            <Card key={card.id} name={card.name} color={card.color} />
          ))}
        </div>
      </div>
      <footer>
        <span className="font-bold text-xs"> by RdN </span>
      </footer>
    </main>
  );
}

const TablePoints1 = () => {
  return (
    <div className="flex items-center justify-center flex-col bg-gray-300 rounded-xl pl-4 pt-2 pb-4">
      <span className="text-2xl font-bold">Trio Table</span>
      <div className="grid grid-cols-2 gap-2 content-center">
        <span className="text-lg font-bold content-center w-20 underline">
          Combo
        </span>
        <span className="text-lg font-bold w-20 content-center underline">
          Points
        </span>
        <span className="text-lg font-bold">1-1-1</span>
        <span className="text-lg font-bold text-yellow-800">20</span>
        <span className="text-lg font-bold">2-2-2</span>
        <span className="text-lg font-bold text-yellow-800">30</span>
        <span className="text-lg font-bold">3-3-3</span>
        <span className="text-lg font-bold text-yellow-800">40</span>
        <span className="text-lg font-bold">4-4-4</span>
        <span className="text-lg font-bold text-yellow-800">50</span>
        <span className="text-lg font-bold">5-5-5</span>
        <span className="text-lg font-bold text-yellow-800">60</span>
        <span className="text-lg font-bold">6-6-6</span>
        <span className="text-lg font-bold text-yellow-800">70</span>
        <span className="text-lg font-bold">7-7-7</span>
        <span className="text-lg font-bold text-yellow-800">80</span>
        <span className="text-lg font-bold">8-8-8</span>
        <span className="text-lg font-bold text-yellow-800">90</span>
      </div>
    </div>
  );
};
const TablePoints2 = () => {
  return (
    <div className="flex items-center justify-center flex-col bg-gray-300 rounded-xl pl-4 pt-2 pb-4">
      <span className="text-2xl font-bold">Straight Table</span>
      <div className="grid grid-cols-3 gap-2 content-center">
        <span className="text-lg font-bold content-center w-20 underline">
          Combo
        </span>
        <span className="text-lg font-bold w-20 content-center underline">
          Offset
        </span>
        <span className="text-lg font-bold w-20 content-center underline">
          Suited
        </span>
        <span className="text-lg font-bold">1-2-3</span>
        <span className="text-lg font-bold text-yellow-800">10</span>
        <span className="text-lg font-bold text-yellow-800">50</span>
        <span className="text-lg font-bold">2-3-4</span>
        <span className="text-lg font-bold text-yellow-800">20</span>
        <span className="text-lg font-bold text-yellow-800">60</span>
        <span className="text-lg font-bold">3-4-5</span>
        <span className="text-lg font-bold text-yellow-800">30</span>
        <span className="text-lg font-bold text-yellow-800">70</span>
        <span className="text-lg font-bold">4-5-6</span>
        <span className="text-lg font-bold text-yellow-800">40</span>
        <span className="text-lg font-bold text-yellow-800">80</span>
        <span className="text-lg font-bold">5-6-7</span>
        <span className="text-lg font-bold text-yellow-800">50</span>
        <span className="text-lg font-bold text-yellow-800">90</span>
        <span className="text-lg font-bold">6-7-8</span>
        <span className="text-lg font-bold text-yellow-800">60</span>
        <span className="text-lg font-bold text-yellow-800">100</span>
      </div>
    </div>
  );
};

const Card = (props) => {
  const [selected, setSelected] = useState(false);

  return (
    <div
      key={props.id}
      className={`${props.color === 'red' && 'bg-red-500'}
          ${props.color === 'blue' && 'bg-blue-500'}
          ${props.color === 'yellow' && 'bg-yellow-500'}
          ${selected && 'bg-gray-500'}
          h-16 w-12 rounded-md flex items-center justify-center text-xl hover:bg-gray-500 cursor-pointer`}
      onClick={() => setSelected((p) => !p)}
    >
      {props.name}
    </div>
  );
};
