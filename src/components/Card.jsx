import { GrPlayFill } from 'react-icons/gr';

const Card = () => {
  const listCard = [
    {
      img: 'https://dailymix-images.scdn.co/v2/img/ab6761610000e5eb4fbc0b223448392ea15c4b9b/2/vi/default',
      title: 'Daily Mix 2',
      artis: 'Thanh Hưng, Mai Tiến Dũng, Barry Brizzy và nhiều hơn nữa',
    },
    {
      img: 'https://dailymix-images.scdn.co/v2/img/ab6761610000e5ebbf753c009fd9c2d53351dd3c/3/vi/default',
      title: 'Daily Mix 3',
      artis: 'Alan Walker, DEAMN, Avicii và nhiều hơn nữa',
    },
    {
      img: 'https://dailymix-images.scdn.co/v2/img/ab6761610000e5eb52d89b38ef66f35b1669cb13/4/vi/default',
      title: 'Daily Mix 4',
      artis: 'steezy prime, Kid Kio, Downtown Owl và nhiều hơn nữa',
    },

    {
      img: 'https://dailymix-images.scdn.co/v2/img/ab6761610000e5eb416bd8a66bfcbc545c2009ac/5/vi/default',
      title: 'Daily Mix 5',
      artis:
        "Gracie Abrams, Olivia O'Brien, Claire Rosinkranz và nhiều hơn nữa",
    },
    {
      img: 'https://dailymix-images.scdn.co/v2/img/ab6761610000e5eb05231374d70f739a32d4f822/6/vi/default',
      title: 'Daily Mix 6',
      artis: 'Lemeria, Senn, Zeyn và nhiều hơn nữa',
    },
    {
      img: 'https://newjams-images.scdn.co/image/ab676477000033ad/dt/v3/discover-weekly/V5xasijGJIHZy1w8sT0UbkpKT5hTszzNrZxsq6Q8nEn7KRoITyNn85vOYG7obYIDWWzfqYJsHOB0xMiP5necBis0kzKeiMJDJc8kZxBQ04GLDyKt-AViHR9Sa52_huBAfB5v5Ek_5kwq2iyJX3n7_zPsMUx28xEvzlt0cySSBt7cmCNnxhuvNC88-7siTEWYI8Vu50hZpIQg128_svNvmA==/MDE6OTQ6NDBUMjItOTAtMw==',
      title: 'Daily Mix 7',
      artis:
        'Tuyển tập nhạc mới hằng tuần. Thưởng thức ca khúc mới và ít người nghe dành cho bạn. Cập nhật mỗi thứ Hai.',
    },
  ];

  return (
    <div className="block">
      <div className="h-[47px]">
        <div className="flex justify-between mb-5">
          <h1 className="flex items-start">
            <a href="#" className="hover:border-b-2">
              Dành Cho Bạn
            </a>
          </h1>
          <a href="#" className="flex items-start hover:border-b-2">
            <span>Hiện tất cả</span>
          </a>
        </div>
      </div>
      <div className="h-70 flex justify-start gap-x-7">
        {listCard.map(item => (
          <div
            className="hover:bg-stone-700 delay-50 duration-100 bg-stone-800 p-5 rounded-lg w-44 group cursor-pointer"
            key={item.title}
          >
            <div className="relative">
              <div className="">
                <img src={item.img} className="w-full rounded shadow" />
              </div>

              <button className="absolute rounded-full bg-red-600 opacity-0 group-hover:opacity-100 transition ease-in-out group-hover:-translate-y-2 duration-[350ms] h-[48px] w-[48px] bottom-0 right-2 hover:scale-105 hover:bg-red-500 cursor-pointer">
                <div className="flex justify-center items-center">
                  <GrPlayFill className="text-black text-lg" />
                </div>
              </button>
            </div>

            <h3 className="text-gray-200 font-bold mt-5"> {item.title}</h3>
            <p className="text-gray-400 font-light mt-2 text-sm text-ellipsis overflow-hidden line-clamp-2">
              {item.artis}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Card;
