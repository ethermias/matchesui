import { Tag } from "@/types/tag";
// import Countdown from 'react-countdown';

export default function TagBar() {
  const targetDate = new Date("2024-04-02T11:26:00").getTime();
  const tags: Tag[] = [
    {
      id: 1,
      title: "Premer Legue 👍🏻",
      completed: false,
    },
    {
      id: 2,
      title: "Matchweek 33 📺 ",
      completed: false,
    }
  ];
  return (
    <div className="text-center py-6 space-y-6 mt-4" >
      <div className="flex items-center space-x-6">
        {tags.map((t) => <span key={t.id}>{ t.title }</span>
        )}
        {/* <Countdown date={targetDate} /> */}
      </div>
    </div>
  );
}
