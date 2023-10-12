import { Range, getTrackBackground } from 'react-range';
import { useAudio } from 'react-use';
import { secondToTime } from '../helper/utils';
import { Icon } from '../helper/icons';

const Player = () => {
  const STEP = 0.1;
  const MIN = 0;

  const [audio, state, controls, ref] = useAudio({
    // src: 'http://api.mp3.zing.vn/api/streaming/audio/ZZ9IO9WC/320',
    src: '',
    autoPlay: true,
  });
  return (
    <div className="h-24 bg-black w-full fixed inset-x-0 bottom-0 border-t border-white border-opacity-5 z-40 text-white">
      <div className="flex px-4 justify-between items-center h-full">
        <div className="flex min-w-[11.25] w-[30%] text-white">
          <div className="flex items-center">
            <div className="w-16 h-16 overflow-hidden object-cover object-center">
              <img
                src="https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/cover/2/d/b/9/2db9a78a4bb650f5f79a094d6a142bf6.jpg"
                alt=""
              />
            </div>
            <div className="pl-2">
              <h6 className="text-[1rem] font-semibold cursor-pointer hover:text-indigo-700 line-clamp-1">
                Tháng Mấy Em Nhớ Anh?
              </h6>
              <p className="text-[0.75rem] font-semibold cursor-pointer text-[#9ca3af]">
                Hà Anh Tuấn
              </p>
            </div>
            <div className="flex items-center ml-3">
              <button
                className="w-9 h-9 flex items-center justify-center text-white text-opacity-70
                hover:text-opacity-100 hover:text-pink-400"
              >
                <Icon size={16} name="heart" />
              </button>
            </div>
          </div>
        </div>
        <div className="max-w-[45rem] w-[35%] flex flex-col items-center text-stone-400">
          <div className="flex items-center justify-center gap-x-4">
            <button className="w-8 h-10 flex items-center justify-center text-opacity-70 hover:text-white text-xl">
              <Icon size={16} name="shuffle" />
            </button>
            <button className="w-8 h-10 flex items-center justify-center text-opacity-70 hover:text-white text-xl">
              <Icon size={16} name="playerPrev" />
            </button>

            <button
              onClick={controls[state?.playing ? 'pause' : 'play']}
              className="w-8 h-8 bg-white flex items-center justify-center text-black rounded-full hover:scale-[1.06]"
            >
              <Icon size={16} name={state?.playing ? 'pause' : 'play'} />
            </button>

            <button className="w-8 h-10 flex items-center justify-center text-opacity-70 hover:text-white text-xl">
              <Icon size={16} name="playerNext" />
            </button>
            <button className="w-8 h-10 flex items-center justify-center text-opacity-70 hover:text-white text-xl">
              <Icon size={16} name="repeat" />
            </button>
          </div>
          {/* {JSON.stringify(state)} */}
          <div className="w-full flex items-center gap-x-2">
            <div className="text-[0.688rem] text-white text-opacity-70">
              {secondToTime(state?.time)}
            </div>
            {audio}
            <Range
              values={[state?.time]}
              step={STEP}
              min={MIN}
              max={state?.duration || 1}
              onChange={values => controls.seek(values[0])}
              renderTrack={({ props, children }) => (
                <div
                  onMouseDown={props.onMouseDown}
                  onTouchStart={props.onTouchStart}
                  className="flex w-full h-7 group"
                  style={props.style}
                >
                  <div
                    ref={props.ref}
                    className="h-1 w-full rounded-md self-center"
                    style={{
                      background: getTrackBackground({
                        values: [state?.time],
                        colors: ['#DC2626', '#535353'],
                        min: MIN,
                        max: state?.duration || 1,
                      }),
                    }}
                  >
                    {children}
                  </div>
                </div>
              )}
              renderThumb={({ props, isDragged }) => (
                <div
                  {...props}
                  className={`h-3 w-3 rounded-full bg-white ${
                    !isDragged ? 'opacity-0' : ''
                  } group-hover:opacity-100`}
                  style={{
                    ...props.style,
                    boxShadow: '0px 2px 4px 0 rgb(0 0 0 / 50%)',
                  }}
                />
              )}
            />
            <div className="text-[0.688rem] text-white text-opacity-70">
              {secondToTime(state?.duration)}
            </div>
          </div>
        </div>
        <div className="min-w-[11.25] w-[30%] flex justify-end items-center text-white">
          <button className="w-9 h-9 flex items-center justify-center hover:text-opacity-100 hover:text-pink-400">
            <Icon size={16} name="lyrics" />
          </button>
          <button className="w-9 h-9 flex items-center justify-center hover:text-opacity-100 hover:text-pink-400">
            <Icon size={16} name="queue" />
          </button>
          <button className="w-9 h-9 flex items-center justify-center hover:text-opacity-100 hover:text-pink-400">
            <Icon size={16} name="volumeFull" />
          </button>
          <div className="w-[93px] max-w-full">
            <Range
              values={[state?.time]}
              step={STEP}
              min={MIN}
              max={state?.duration || 1}
              onChange={values => controls.seek(values[0])}
              renderTrack={({ props, children }) => (
                <div
                  onMouseDown={props.onMouseDown}
                  onTouchStart={props.onTouchStart}
                  className="flex w-full h-7 group"
                  style={props.style}
                >
                  <div
                    ref={props.ref}
                    className="h-1 w-full rounded-md self-center"
                    style={{
                      background: getTrackBackground({
                        values: [state?.time],
                        colors: ['#DC2626', '#535353'],
                        min: MIN,
                        max: state?.duration || 1,
                      }),
                    }}
                  >
                    {children}
                  </div>
                </div>
              )}
              renderThumb={({ props, isDragged }) => (
                <div
                  {...props}
                  className={`h-3 w-3 rounded-full bg-white ${
                    !isDragged ? 'opacity-0' : ''
                  } group-hover:opacity-100`}
                  style={{
                    ...props.style,
                    boxShadow: '0px 2px 4px 0 rgb(0 0 0 / 50%)',
                  }}
                />
              )}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Player;
