import { Clock, Users, Star, Play } from "lucide-react"

type Course = {
  title: string
  instructor: string
  description: string
  image: string
  level: string
  duration: string
  students: string
  rating: number
  progress?: number
}

export default function CourseCard({
  title,
  instructor,
  description,
  image,
  level,
  duration,
  students,
  rating,
  progress,
}: Course) {
  return (
    <div className="bg-white rounded-xl border overflow-hidden shadow-sm hover:shadow-md transition">

      {/* Image */}

      <div className="relative">

        <img
          src={image}
          alt={title}
          className="w-full h-48 object-cover"
        />

        <LevelCategory level={level}/>

      </div>

      {/* Content */}

      <div className="p-5 space-y-3">

        <h3 className="font-semibold text-lg">{title}</h3>

        <p className="text-sm text-gray-500">by {instructor}</p>

        <p className="text-sm text-gray-600 line-clamp-2">
          {description}
        </p>

        {/* Course Stats */}

        <div className="flex gap-4 text-xs text-gray-500 items-center">

          <div className="flex items-center gap-1">
            <Clock size={14} />
            {duration}
          </div>

          <div className="flex items-center gap-1">
            <Users size={14} />
            {students}
          </div>

          <div className="flex items-center gap-1 text-yellow-500">
            <Star size={14} className="fill-yellow-500" />
            {rating}
          </div>

        </div>
        
        {(progress && 
          (
            <>
              {/* Progress */}
              <div>

                <div className="flex justify-between text-xs text-gray-500 mb-1">
                  <span>Progress</span>
                  <span>{progress}%</span>
                </div>

                <div className="w-full bg-gray-200 h-2 rounded-full">
                  <div
                    className="bg-black h-2 rounded-full"
                    style={{ width: `${progress}%` }}
                  />
                </div>

              </div>

              {/* Button */}
              <button className="w-full flex items-center justify-center gap-2 bg-gray-900 text-white py-2 rounded-lg hover:bg-gray-700">

                <Play size={16} />
                Continue Learning

              </button>
            </>
          ) || (
            <button className="w-full flex items-center justify-center gap-2 py-2 rounded-lg border hover:bg-gray-300">

              Enroll Now

            </button>
          )
      )}

      </div>
    </div>
  )
}

function LevelCategory({level}: {level :string}){
  switch(level){
    case "Beginner":
      return (
        <span className="absolute top-3 right-3 bg-green-200 text-green-800 font-semibold text-xs px-2 py-1 rounded-full">
          {level}
        </span>
      )

    case "Intermediate":
      return (
        <span className="absolute top-3 right-3 bg-yellow-200 text-yellow-800 font-semibold text-xs px-2 py-1 rounded-full">
          {level}
        </span>
      )

    case "Advanced":
      return (
        <span className="absolute top-3 right-3 bg-red-200 text-red-800 font-semibold text-xs px-2 py-1 rounded-full">
          {level}
        </span>
      )
  }
}