
import Image from "next/image";
import { UserPlus, Eye } from "lucide-react";

const SuggestedUsers = () => {

    const suggestions = [
  {
    id: 1,
    name: "Omar",
    teach: ["SEO", "Marketing"],
    learn: ["UI/UX Design", "Photoshop"],
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    id: 2,
    name: "Amina",
    teach: ["French", "Cooking"],
    learn: ["JavaScript", "React"],
    avatar: "https://randomuser.me/api/portraits/women/45.jpg",
  },
];


  return (
    <div className="bg-white p-6 rounded-xl shadow-md">
      <h3 className="text-xl font-semibold mb-4">Suggested Matches</h3>
      <ul className="grid gap-4">
        {suggestions.map((user) => (
          <li key={user.id} className="flex items-start gap-4 p-4 border border-slate-200 rounded-lg">
            <Image
              src={user.avatar}
              alt={user.name}
              width={50}
              height={50}
              className="rounded-full"
            />
            <div className="flex-1">
              <h4 className="text-lg font-medium">{user.name}</h4>
              <p className="text-sm text-slate-500">
                <strong>Can teach:</strong> {user.teach.join(", ")} <br />
                <strong>Wants to learn:</strong> {user.learn.join(", ")}
              </p>
              <div className="mt-2 flex gap-2">
                <button className="px-3 py-1 bg-blue-500 text-white rounded-md text-sm flex items-center gap-1">
                  <UserPlus size={16} /> Connect
                </button>
                <button className="px-3 py-1 border text-slate-700 rounded-md text-sm flex items-center gap-1">
                  <Eye size={16} /> View
                </button>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SuggestedUsers