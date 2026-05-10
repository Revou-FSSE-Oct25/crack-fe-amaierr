export default function LevelCategory({ level } : {level: string}){
    return <Category level={level}/>
}

function Category({ level }: { level: string }) {
    switch (level) {
      case "Beginner":
        return (
          <span className="absolute top-3 right-3 bg-green-200 text-green-800 font-semibold text-xs px-2 py-1 rounded-full">
            {level}
          </span>
        );
  
      case "Intermediate":
        return (
          <span className="absolute top-3 right-3 bg-yellow-200 text-yellow-800 font-semibold text-xs px-2 py-1 rounded-full">
            {level}
          </span>
        );
  
      case "Advanced":
        return (
          <span className="absolute top-3 right-3 bg-red-200 text-red-800 font-semibold text-xs px-2 py-1 rounded-full">
            {level}
          </span>
        );
    }
  }