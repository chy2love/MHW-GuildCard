'use client';
import { weaponType } from '@/types/guildCard';
import { redirect } from 'next/navigation';
import { useState } from 'react';
export default function Page() {
  const [page, setPage] = useState<0 | 1>(0);
  const [nickname, setNickname] = useState<string>('');
  const [platform, setPlatform] = useState<'steam' | 'ps' | 'xbox' | ''>('');
  const [mainWeapon, setMainWeapon] = useState<weaponType | ''>('');
  const [subWeaponList, setSubWeaponList] = useState<weaponType[]>([]);
  const setSubWeapon = (weapon: weaponType) => {
    if (subWeaponList.includes(weapon)) {
      setSubWeaponList(subWeaponList.filter((w) => w !== weapon));
    } else {
      setSubWeaponList([...subWeaponList, weapon]);
    }
  };

  const submit = async () => {
    if (nickname === '') {
      alert('닉네임을 입력해 주세요.');
      return;
    }
    if (platform === '') {
      alert('플랫폼을 선택해 주세요.');
      return;
    }
    if (mainWeapon === '') {
      alert('주무기를 선택해 주세요.');
      return;
    }
    const res = await fetch('/api/card', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        isAgree: true,
        nickname,
        platform,
        mainWeapon,
        subWeapon: subWeaponList
      })
    });
    if (res.status === 200) {
      alert('등록되었습니다. 디스코드 채널에 가입해 주세요.');
      redirect('/card-list');
    } else {
      alert('등록에 실패했습니다. 관리자에게 문의해 주세요.');
    }
  };
  return (
    <div className="flex justify-center bg-[lightgray] h-fit">
      <div className="max-w-[440px] flex justify-center w-full h-fit">
        <div className="w-full max-w-[440px] min-w-[390px] h-fit px-5 pt-10 pb-20 bg-card bg-center bg-cover bg-no-repeat">
          {page === 0 && (
            <div className="w-full h-full min-h-screen bg-black bg-opacity-40 rounded-2xl p-4 flex flex-col">
              <p className="font-bold text-white leading-7 break-keep">
                1. 몬린이 야생단은 모두가 다같이 즐겁게 플레이 하기 위한 모임으로 파벌을 나누는 등 야생단 내부에서의
                소모임을 운영하는 것을 금합니다.
              </p>
              <br />
              <p className="font-bold text-white leading-7 break-keep">
                2. 정치, 욕설, 종교, 그 외 모든 갈등 요소가 될 수 있는 주제는 가급적 삼가주시고, 비난, 욕설, 비속어,
                말꼬리 물기, 반말, 선정적인 단어 등 불쾌감을 주는 언행 사용을 금합니다.
              </p>
              <br />
              <p className="font-bold text-white leading-7 break-keep">
                3. 기본적인 핵과 치트 사용을 금지하고 있습니다.
              </p>
              <br />
              <p className="pl-4 font-bold text-white leading-7 break-keep">
                - 각종 핵 및 치트 프로그램의 사용을 금한다.
                <br /> Ex) 딜미터기, 메크로, 딜 배수
              </p>
              <br />
              <p className="pl-4 font-bold text-white leading-7 break-keep">
                - 캐릭터의 외형, 몬스터의 외형, 유실물 및 아이템의 발견을 위한 발광 및 표시 등 본인에게만 보이며
                타인에게 해를 주지 않는 선의 모드 사용을 허용한다.
              </p>
              <br />
              <br />
              <br />
              <br />
              <br />
              <button
                onClick={() => setPage(1)}
                className="text-sm font-bold px-3 py-2 border border-[#ceaa99] text-[#ceaa99] flex items-center justify-center rounded-md  leading-6 break-keep"
              >
                규정을 숙지하였으며, 위반시 관리자의 제제에 동의합니다.
              </button>
            </div>
          )}
          {page === 1 && (
            <div className="w-full h-full bg-black bg-opacity-40 rounded-2xl p-5 flex flex-col">
              <p className="font-bold text-white leading-6 break-keep">1. 사용하실 닉네임과 생년을 적어주세요.</p>
              <br />
              <input
                onChange={(e) => setNickname(e.target.value)}
                className="px-2 border-b-2 border-gray-400 py-2 rounded-none w-[calc(100%-60px)] ml-5  text-white font-bold"
                type="text"
                placeholder="이름/00"
              />
              <br />
              <br />
              <p className="font-bold text-white leading-6 break-keep">2. 플레이 하는 플랫폼을 선택해 주세요.</p>
              <br />
              <div className="pl-4 flex gap-10">
                <button
                  onClick={() => setPlatform('steam')}
                  className={`p-2 rounded-md bg-[url('../assets/steam.png')] w-14 h-14 bg-no-repeat bg-center ${
                    platform === 'steam' ? 'border-2 border-blue-400' : ''
                  }`}
                ></button>
                <button
                  onClick={() => setPlatform('ps')}
                  className={`p-2 rounded-md bg-[url('../assets/ps.png')]  w-14 h-14 bg-no-repeat bg-center ${
                    platform === 'ps' ? 'border-2 border-blue-400' : ''
                  }`}
                ></button>
                <button
                  onClick={() => setPlatform('xbox')}
                  className={`p-2 rounded-md bg-[url('../assets/xbox.png')]  w-14 h-14 bg-no-repeat bg-center ${
                    platform === 'xbox' ? 'border-2 border-blue-400' : ''
                  }`}
                ></button>
              </div>
              <br />
              <br />
              <p className="font-bold text-white leading-6 break-keep">3. 주로 플레이 할 무기를 선택해 주세요.</p>
              <br />
              <div className="pl-4 flex flex-wrap gap-7">
                <button
                  onClick={() => setMainWeapon('대검')}
                  className={`${
                    mainWeapon === '대검' ? 'border-2 border-orange-700 rounded-md' : ''
                  } relative bg-top bg-no-repeat bg-contain w-12 h-[74px] bg-[url('../assets/대검.svg')]`}
                >
                  <p className="font-bold text-white leading-6 text-sm break-keep absolute bottom-0 left-[50%] translate-x-[-50%]">
                    대검
                  </p>
                </button>
                <button
                  onClick={() => setMainWeapon('태도')}
                  className={`${
                    mainWeapon === '태도' ? 'border-2 border-orange-700 rounded-md' : ''
                  } relative bg-top bg-no-repeat bg-contain w-12 h-[74px] bg-[url('../assets/태도.svg')]`}
                >
                  <p className="font-bold text-white leading-6 text-sm break-keep absolute bottom-0 left-[50%] translate-x-[-50%]">
                    태도
                  </p>
                </button>
                <button
                  onClick={() => setMainWeapon('한손검')}
                  className={`${
                    mainWeapon === '한손검' ? 'border-2 border-orange-700 rounded-md' : ''
                  } relative bg-top bg-no-repeat bg-contain w-12 h-[74px] bg-[url('../assets/한손검.svg')]`}
                >
                  <p className="font-bold text-white leading-6 text-sm break-keep absolute bottom-0 left-[50%] translate-x-[-50%]">
                    한손검
                  </p>
                </button>
                <button
                  onClick={() => setMainWeapon('쌍검')}
                  className={`${
                    mainWeapon === '쌍검' ? 'border-2 border-orange-700 rounded-md' : ''
                  } relative bg-top bg-no-repeat bg-contain w-12 h-[74px] bg-[url('../assets/쌍검.svg')]`}
                >
                  <p className="font-bold text-white leading-6 text-sm break-keep absolute bottom-0 left-[50%] translate-x-[-50%]">
                    쌍검
                  </p>
                </button>
                <button
                  onClick={() => setMainWeapon('해머')}
                  className={`${
                    mainWeapon === '해머' ? 'border-2 border-orange-700 rounded-md' : ''
                  } relative bg-top bg-no-repeat bg-contain w-12 h-[74px] bg-[url('../assets/해머.svg')]`}
                >
                  <p className="font-bold text-white leading-6 text-sm break-keep absolute bottom-0 left-[50%] translate-x-[-50%]">
                    해머
                  </p>
                </button>
                <button
                  onClick={() => setMainWeapon('수렵피리')}
                  className={`${
                    mainWeapon === '수렵피리' ? 'border-2 border-orange-700 rounded-md' : ''
                  } relative bg-top bg-no-repeat bg-contain w-12 h-[74px] bg-[url('../assets/수렵피리.webp')]`}
                >
                  <p className="font-bold text-white leading-6 text-sm break-keep absolute bottom-0 left-[50%] translate-x-[-50%]">
                    피리
                  </p>
                </button>
                <button
                  onClick={() => setMainWeapon('랜스')}
                  className={`${
                    mainWeapon === '랜스' ? 'border-2 border-orange-700 rounded-md' : ''
                  } relative bg-top bg-no-repeat bg-contain w-12 h-[74px] bg-[url('../assets/랜스.svg')]`}
                >
                  <p className="font-bold text-white leading-6 text-sm break-keep absolute bottom-0 left-[50%] translate-x-[-50%]">
                    랜스
                  </p>
                </button>
                <button
                  onClick={() => setMainWeapon('건랜스')}
                  className={`${
                    mainWeapon === '건랜스' ? 'border-2 border-orange-700 rounded-md' : ''
                  } relative bg-top bg-no-repeat bg-contain w-12 h-[74px] bg-[url('../assets/건랜.png')]`}
                >
                  <p className="font-bold text-white leading-6 text-sm break-keep absolute bottom-0 left-[50%] translate-x-[-50%]">
                    건랜스
                  </p>
                </button>
                <button
                  onClick={() => setMainWeapon('차지 액스')}
                  className={`${
                    mainWeapon === '차지 액스' ? 'border-2 border-orange-700 rounded-md' : ''
                  } relative bg-top bg-no-repeat bg-contain w-12 h-[74px] bg-[url('../assets/차액.png')]`}
                >
                  <p className="font-bold text-white leading-6 text-sm break-keep absolute bottom-0 left-[50%] translate-x-[-50%]">
                    차액
                  </p>
                </button>
                <button
                  onClick={() => setMainWeapon('슬래시 액스')}
                  className={`${
                    mainWeapon === '슬래시 액스' ? 'border-2 border-orange-700 rounded-md' : ''
                  } relative bg-top bg-no-repeat bg-contain w-12 h-[74px] bg-[url('../assets/슬액.png')]`}
                >
                  <p className="font-bold text-white leading-6 text-sm break-keep absolute bottom-0 left-[50%] translate-x-[-50%]">
                    슬액
                  </p>
                </button>
                <button
                  onClick={() => setMainWeapon('조충곤')}
                  className={`${
                    mainWeapon === '조충곤' ? 'border-2 border-orange-700 rounded-md' : ''
                  } relative bg-top bg-no-repeat bg-contain w-12 h-[74px] bg-[url('../assets/조충곤.png')]`}
                >
                  <p className="font-bold text-white leading-6 text-sm break-keep absolute bottom-0 left-[50%] translate-x-[-50%]">
                    조충곤
                  </p>
                </button>
                <button
                  onClick={() => setMainWeapon('라이트 보우건')}
                  className={`${
                    mainWeapon === '라이트 보우건' ? 'border-2 border-orange-700 rounded-md' : ''
                  } relative bg-top bg-no-repeat bg-contain w-12 h-[74px] bg-[url('../assets/라보.svg')]`}
                >
                  <p className="font-bold text-white leading-6 text-sm break-keep absolute bottom-0 left-[50%] translate-x-[-50%]">
                    라보
                  </p>
                </button>
                <button
                  onClick={() => setMainWeapon('헤비 보우건')}
                  className={`${
                    mainWeapon === '헤비 보우건' ? 'border-2 border-orange-700 rounded-md' : ''
                  } relative bg-top bg-no-repeat bg-contain w-12 h-[74px] bg-[url('../assets/헤보.svg')]`}
                >
                  <p className="font-bold text-white leading-6 text-sm break-keep absolute bottom-0 left-[50%] translate-x-[-50%]">
                    헤보
                  </p>
                </button>
                <button
                  onClick={() => setMainWeapon('활')}
                  className={`${
                    mainWeapon === '활' ? 'border-2 border-orange-700 rounded-md' : ''
                  } relative bg-top bg-no-repeat bg-contain w-12 h-[74px] bg-[url('../assets/활.svg')]`}
                >
                  <p className="font-bold text-white leading-6 text-sm break-keep absolute bottom-0 left-[50%] translate-x-[-50%]">
                    활
                  </p>
                </button>
              </div>
              <br />
              <br />
              <p className="font-bold text-white leading-6 break-keep">
                4. 주무기외에 플레이 할 무기를 모두 선택해 주세요.
              </p>
              <br />
              <div className="pl-4 flex flex-wrap gap-7">
                <button
                  onClick={() => setSubWeapon('대검')}
                  className={`${
                    subWeaponList.includes('대검') ? 'border-2 border-lime-700 rounded-md' : ''
                  } relative bg-top bg-no-repeat bg-contain w-12 h-[74px] bg-[url('../assets/대검.svg')]`}
                >
                  <p className="font-bold text-white leading-6 text-sm break-keep absolute bottom-0 left-[50%] translate-x-[-50%]">
                    대검
                  </p>
                </button>
                <button
                  onClick={() => setSubWeapon('태도')}
                  className={`${
                    subWeaponList.includes('태도') ? 'border-2 border-lime-700 rounded-md' : ''
                  } relative bg-top bg-no-repeat bg-contain w-12 h-[74px] bg-[url('../assets/태도.svg')]`}
                >
                  <p className="font-bold text-white leading-6 text-sm break-keep absolute bottom-0 left-[50%] translate-x-[-50%]">
                    태도
                  </p>
                </button>
                <button
                  onClick={() => setSubWeapon('한손검')}
                  className={`${
                    subWeaponList.includes('한손검') ? 'border-2 border-lime-700 rounded-md' : ''
                  } relative bg-top bg-no-repeat bg-contain w-12 h-[74px] bg-[url('../assets/한손검.svg')]`}
                >
                  <p className="font-bold text-white leading-6 text-sm break-keep absolute bottom-0 left-[50%] translate-x-[-50%]">
                    한손검
                  </p>
                </button>
                <button
                  onClick={() => setSubWeapon('쌍검')}
                  className={`${
                    subWeaponList.includes('쌍검') ? 'border-2 border-lime-700 rounded-md' : ''
                  } relative bg-top bg-no-repeat bg-contain w-12 h-[74px] bg-[url('../assets/쌍검.svg')]`}
                >
                  <p className="font-bold text-white leading-6 text-sm break-keep absolute bottom-0 left-[50%] translate-x-[-50%]">
                    쌍검
                  </p>
                </button>
                <button
                  onClick={() => setSubWeapon('해머')}
                  className={`${
                    subWeaponList.includes('해머') ? 'border-2 border-lime-700 rounded-md' : ''
                  } relative bg-top bg-no-repeat bg-contain w-12 h-[74px] bg-[url('../assets/해머.svg')]`}
                >
                  <p className="font-bold text-white leading-6 text-sm break-keep absolute bottom-0 left-[50%] translate-x-[-50%]">
                    해머
                  </p>
                </button>
                <button
                  onClick={() => setSubWeapon('수렵피리')}
                  className={`${
                    subWeaponList.includes('수렵피리') ? 'border-2 border-lime-700 rounded-md' : ''
                  } relative bg-top bg-no-repeat bg-contain w-12 h-[74px] bg-[url('../assets/수렵피리.webp')]`}
                >
                  <p className="font-bold text-white leading-6 text-sm break-keep absolute bottom-0 left-[50%] translate-x-[-50%]">
                    피리
                  </p>
                </button>
                <button
                  onClick={() => setSubWeapon('랜스')}
                  className={`${
                    subWeaponList.includes('랜스') ? 'border-2 border-lime-700 rounded-md' : ''
                  } relative bg-top bg-no-repeat bg-contain w-12 h-[74px] bg-[url('../assets/랜스.svg')]`}
                >
                  <p className="font-bold text-white leading-6 text-sm break-keep absolute bottom-0 left-[50%] translate-x-[-50%]">
                    랜스
                  </p>
                </button>
                <button
                  onClick={() => setSubWeapon('건랜스')}
                  className={`${
                    subWeaponList.includes('건랜스') ? 'border-2 border-lime-700 rounded-md' : ''
                  } relative bg-top bg-no-repeat bg-contain w-12 h-[74px] bg-[url('../assets/건랜.png')]`}
                >
                  <p className="font-bold text-white leading-6 text-sm break-keep absolute bottom-0 left-[50%] translate-x-[-50%]">
                    건랜스
                  </p>
                </button>
                <button
                  onClick={() => setSubWeapon('차지 액스')}
                  className={`${
                    subWeaponList.includes('차지 액스') ? 'border-2 border-lime-700 rounded-md' : ''
                  } relative bg-top bg-no-repeat bg-contain w-12 h-[74px] bg-[url('../assets/차액.png')]`}
                >
                  <p className="font-bold text-white leading-6 text-sm break-keep absolute bottom-0 left-[50%] translate-x-[-50%]">
                    차액
                  </p>
                </button>
                <button
                  onClick={() => setSubWeapon('슬래시 액스')}
                  className={`${
                    subWeaponList.includes('슬래시 액스') ? 'border-2 border-lime-700 rounded-md' : ''
                  } relative bg-top bg-no-repeat bg-contain w-12 h-[74px] bg-[url('../assets/슬액.png')]`}
                >
                  <p className="font-bold text-white leading-6 text-sm break-keep absolute bottom-0 left-[50%] translate-x-[-50%]">
                    슬액
                  </p>
                </button>
                <button
                  onClick={() => setSubWeapon('조충곤')}
                  className={`${
                    subWeaponList.includes('조충곤') ? 'border-2 border-lime-700 rounded-md' : ''
                  } relative bg-top bg-no-repeat bg-contain w-12 h-[74px] bg-[url('../assets/조충곤.png')]`}
                >
                  <p className="font-bold text-white leading-6 text-sm break-keep absolute bottom-0 left-[50%] translate-x-[-50%]">
                    조충곤
                  </p>
                </button>
                <button
                  onClick={() => setSubWeapon('라이트 보우건')}
                  className={`${
                    subWeaponList.includes('라이트 보우건') ? 'border-2 border-lime-700 rounded-md' : ''
                  } relative bg-top bg-no-repeat bg-contain w-12 h-[74px] bg-[url('../assets/라보.svg')]`}
                >
                  <p className="font-bold text-white leading-6 text-sm break-keep absolute bottom-0 left-[50%] translate-x-[-50%]">
                    라보
                  </p>
                </button>
                <button
                  onClick={() => setSubWeapon('헤비 보우건')}
                  className={`${
                    subWeaponList.includes('헤비 보우건') ? 'border-2 border-lime-700 rounded-md' : ''
                  } relative bg-top bg-no-repeat bg-contain w-12 h-[74px] bg-[url('../assets/헤보.svg')]`}
                >
                  <p className="font-bold text-white leading-6 text-sm break-keep absolute bottom-0 left-[50%] translate-x-[-50%]">
                    헤보
                  </p>
                </button>
                <button
                  onClick={() => setSubWeapon('활')}
                  className={`${
                    subWeaponList.includes('활') ? 'border-2 border-lime-700 rounded-md' : ''
                  } relative bg-top bg-no-repeat bg-contain w-12 h-[74px] bg-[url('../assets/활.svg')]`}
                >
                  <p className="font-bold text-white leading-6 text-sm break-keep absolute bottom-0 left-[50%] translate-x-[-50%]">
                    활
                  </p>
                </button>
              </div>
              <br />
              <br />
              <br />
              <br />
              <button
                onClick={submit}
                className="w-full h-10 bg-slate-600 text-white bg-opacity-80 rounded-md font-bold"
              >
                완료
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
