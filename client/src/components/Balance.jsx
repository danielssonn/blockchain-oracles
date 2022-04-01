// assets
import IMAGES from '../../images'

const Balance = () => {
  return (
    <div className="flex items-center justify-evenly bg-[#383be2]/60 p-8 rounded-lg">

      <div className="flex w-1/4">
        {/* profile lg */}

        <div className="relative w-1/12 flex justify-center items-center">
          <img id="profile" src={IMAGES.face} alt="profile-image" className="w-4/5 z-10" />
          <img src={IMAGES.bg2} alt="profile-image" className="absolute w-[120%] h-[120%] z-5" />
        </div>

        {/* title */}
        <div>
          <p className="text-2xl font-bold text-white">My</p>
          <p className="text-2xl font-bold text-white">Token</p>
          <p className="text-2xl font-bold text-white">Balance</p>
        </div>
      </div>

      {/* balance card */}

      {[
        { title: 'Available Staking Tokens', balance: 500, bg: 'bg-coins' },
        { title: 'Staked Tokens', balance: 500, bg: 'bg-tree' },
        { title: 'Reward Tokens', balance: 500, bg: 'bg-rocket' }
      ].map((n, i) =>
        <div key={n} className={`w-1/4 rounded-xl p-8 flex bg-white/60 ${n.bg} bg-cover bg-no-repeat`}>
          <div className="text-left flex flex-col justify-center">
            <p className="text-[#383be2]/80 font-light text-base mb-2">{n.title}</p>
            <p className="font-bold text-transparent bg-clip-text bg-gradient-to-br from-[#3926AD] to-[#C367D6] text-3xl">{n.balance} <span className="text-[#383be2]/80 font-light text-sm"></span></p>
          </div>
        </div>
      )}

    </div>
  )
}

export default Balance
