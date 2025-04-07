import { Mail, User, Star, Calendar, Trophy } from 'lucide-react';

const user = {
  name: 'CTF winner',
  email: 'Cyberhiest1104@gmail.com',
  avatar: 'https://cdn3.iconfinder.com/data/icons/avatars-flat/33/man_5-512.png',
  joined: 'January 2023',
  bio: 'High-stakes poker lover. Dream big, win bigger!',
  stats: {
    gamesPlayed: 215,
    tournamentsWon: 12,
    rating: 4.8
  }
};

const UserProfile = () => {
  return (
    <div className="max-w-3xl mx-auto px-4 py-16">
      <div className="bg-gray-900 rounded-2xl p-8 shadow-lg text-white">
        <div className="flex flex-col items-center space-y-4">
          <img
            src={user.avatar}
            alt={user.name}
            className="w-32 h-32 rounded-full object-cover ring-4 ring-red-500"
          />
          <h2 className="text-3xl font-bold">{user.name}</h2>
          <p className="text-gray-400">{user.bio}</p>
        </div>

        <div className="mt-8 space-y-4">
          <div className="flex items-center gap-3 text-gray-300">
            <Mail size={18} />
            <span>{user.email}</span>
          </div>
          <div className="flex items-center gap-3 text-gray-300">
            <Calendar size={18} />
            <span>Joined: {user.joined}</span>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-10 text-center">
          <div className="bg-gray-800 p-6 rounded-xl">
            <User className="mx-auto mb-2 text-red-400" />
            <h4 className="text-xl font-semibold">{user.stats.gamesPlayed}</h4>
            <p className="text-sm text-gray-400">Games Played</p>
          </div>
          <div className="bg-gray-800 p-6 rounded-xl">
            <Trophy className="mx-auto mb-2 text-yellow-400" />
            <h4 className="text-xl font-semibold">{user.stats.tournamentsWon}</h4>
            <p className="text-sm text-gray-400">Tournaments Won</p>
          </div>
          <div className="bg-gray-800 p-6 rounded-xl">
            <Star className="mx-auto mb-2 text-purple-400" />
            <h4 className="text-xl font-semibold">{user.stats.rating}</h4>
            <p className="text-sm text-gray-400">Player Rating</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
