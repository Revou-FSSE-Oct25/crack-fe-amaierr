import { Star } from "lucide-react"

interface ReviewTabData {
    reviews: {
        rating: number
        user: {name: string}
        comment: string
    }[]
}

export default function ReviewsTab({reviews}: ReviewTabData) {
    return (
        <div className="space-y-6">
                <h2 className="text-2xl font-semibold">Student Reviews</h2>

                {reviews.map((review, index) => (
                  <div key={index} className="rounded-2xl border p-6">
                    <div className="mb-4 flex items-center gap-1">
                      {Array.from({ length: review.rating }).map((_, index) => (
                        <Star
                          key={index}
                          size={18}
                          className="fill-yellow-400 text-yellow-400"
                        />
                      ))}
                    </div>

                    <h3 className="text-xl font-semibold">
                      {review.user.name}
                    </h3>

                    <p className="mt-3 text-gray-600">"{review.comment}"</p>
                  </div>
                ))}
              </div>
    )
}