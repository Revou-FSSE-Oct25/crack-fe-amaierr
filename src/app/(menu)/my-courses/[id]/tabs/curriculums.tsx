import { CreateSubCurriculumAPI, DeleteSubCurriculumn } from "@/lib/API"
import { zodResolver } from "@hookform/resolvers/zod"
import { Check, ChevronDown, ChevronUp, CircleCheck, CirclePlus, Play, Trash2 } from "lucide-react"
import { Dispatch, SetStateAction, useState } from "react"
import { useForm } from "react-hook-form"
import toast from "react-hot-toast"
import { SubCurriculumnFormData, subCurriculumnSchema } from "./subCurriculumSchema"
import { CreateSubCurriculumn } from "@/interfaces/createSubCurriculumn"

interface CurriculumnsTabData{
    curriculumns: {
        id: string
        name: string
        subCurriculums: {
            id: string
            name: string
            duration: string
            materialLink: string
            progresses: {
                isDone: boolean
            }[]
        }[]
    }[],
    isInstructor: boolean,
    setChangedTimes: Dispatch<SetStateAction<number>>
}

export default function CurriculumsTab({curriculumns, isInstructor, setChangedTimes}: CurriculumnsTabData){
    const [openSection, setOpenSection] = useState<string | null>();
    const [isCreating, setIsCreating] = useState(false)

    function toggleSection(id: string) {
        setOpenSection((prev) => (prev === id ? null : id));
    }

    const showConfirmation = (subCurriculumId: string, subCurriculumName: string) => {
        toast.custom((t) => (
          <div className={`${t.visible ? 'animate-enter' : 'animate-leave'} max-w-md w-full bg-white shadow-lg rounded-lg pointer-events-auto ring-2 ring-red-600 ring-opacity-5`}>
            <div className="p-4">
              <p className="text-sm font-medium text-gray-900">
                Are you sure you want to delete "<strong>{subCurriculumName}</strong>"?
              </p>
            </div>
            <div className="flex m-4 gap-2">
              <button
                onClick={async () => {
                  toast.promise(
                    DeleteSubCurriculumn(subCurriculumId),
                    {
                      loading: 'Deleting...',
                      success: () =>{
                        setChangedTimes(+2)
                        return <b>Delete Complete!</b>}
                      ,
                      error: (error: any) => {
                        return error.message;
                      },
                    }
                  )
                  toast.dismiss(t.id);
                }}
                className="w-full bg-green-400 rounded-lg p-2 flex items-center justify-center text-sm font-medium text-white hover:bg-green-600"
              >
                Confirm
              </button>
              <button
                onClick={() => toast.dismiss(t.id)}
                className="w-full bg-red-500 p-2 rounded-lg flex items-center justify-center text-sm font-medium text-white hover:bg-red-400 focus:outline-none"
              >
                Cancel
              </button>
            </div>
          </div>
        ), {
          duration: Infinity,
          position: "top-center"
        });
    };

    async function onSubmit(curriculumnId: string) {
      const data : CreateSubCurriculumn = {
        curriculumnId, 
        name: getValues("name"),
        duration: getValues("duration"),
        materialLink: getValues("materialLink")
      } 
      try{
        await CreateSubCurriculumAPI(data);
        setChangedTimes(+1)
        setIsCreating(false)
        reset()
      } catch (error: any) {
        toast.error(error.message);
      }
    }

    const {
      register,
      handleSubmit,
      getValues,
      reset,
      formState: { errors },
    } = useForm<SubCurriculumnFormData>({
      resolver: zodResolver(subCurriculumnSchema),
    });

    return (
        <div className="space-y-6">
                <h2 className="text-2xl font-semibold">Course Content</h2>

                {curriculumns.map((curriculum) => (
                  <div
                    key={curriculum.id}
                    className="border-b pb-4 last:border-none"
                  >
                    <button
                      onClick={() => toggleSection(curriculum.id)}
                      className="flex w-full items-center justify-between py-3 text-left"
                    >
                      <h3 className="text-xl font-semibold">
                        {curriculum.name}
                      </h3>

                      {openSection === curriculum.id ? (
                        <ChevronUp />
                      ) : (
                        <ChevronDown />
                      )}
                    </button>

                    {openSection === curriculum.id && (
                      <div className="space-y-3 pt-4">
                        {curriculum.subCurriculums.map((subCurriculum) => (
                          <div
                            key={subCurriculum.id}
                            className="flex items-center justify-between rounded-xl border p-4"
                          >
                            <div className="flex items-center gap-4">
                              {!isInstructor &&
                                (subCurriculum.progresses[0].isDone ? (
                                  <CircleCheck className="text-green-500" />
                                ) : (
                                  <Play />
                                ))}

                              <div>
                                <p className="font-medium">
                                  {subCurriculum.name}
                                </p>

                                <p className="text-sm text-gray-500">
                                  {subCurriculum.duration} min
                                </p>
                              </div>
                            </div>

                            {!isInstructor &&
                              (
                                <button className="font-medium cursor-pointer">
                                  {subCurriculum.progresses[0].isDone
                                  ? "Review"
                                  : "Start"}
                                </button>
                              ) || (
                                <button 
                                  className="bg-red-600 rounded-lg cursor-pointer"
                                  onClick={() => showConfirmation(subCurriculum.id, subCurriculum.name)}
                                >
                                  <Trash2 className="m-2" color="white"/>
                                </button>
                              )
                            }

                          </div>
                        ))}
                        {isInstructor &&
                          (
                            (isCreating && (
                                <form
                                  onSubmit={handleSubmit(() => onSubmit(curriculum.id))}
                                  className="flex items-center justify-between rounded-xl border p-4"
                                >
                                  <div>
                                    <input
                                      {...register("name")}
                                      placeholder="Sub curriculum title"
                                      className="w-full mt-1 border rounded-lg px-3 py-2"
                                    />
                                    {errors.name && (
                                      <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
                                    )}

                                    <input
                                      {...register("materialLink")}
                                      placeholder="Sub curriculum material link"
                                      className="w-full mt-1 border rounded-lg px-3 py-2"
                                    />
                                    {errors.materialLink && (
                                      <p className="text-red-500 text-sm mt-1">{errors.materialLink.message}</p>
                                    )}

                                    <input
                                      {...register("duration", {valueAsNumber: true})}
                                      placeholder="Sub curriculum duration (min)"
                                      className="w-full mt-1 border rounded-lg px-3 py-2"
                                      defaultValue={0}
                                    />
                                    {errors.duration && (
                                      <p className="text-red-500 text-sm mt-1">{errors.duration.message}</p>
                                    )}

                                  </div>
                                  <div className="flex gap-1">
                                    <button 
                                      type="submit"
                                      className="bg-green-400 rounded-lg cursor-pointer"
                                    >
                                      <Check className="m-2" color="white"/>
                                    </button>
                                    <button 
                                      className="bg-red-600 rounded-lg cursor-pointer"
                                      onClick={() => setIsCreating(false)}
                                    >
                                      <Trash2 className="m-2" color="white"/>
                                    </button>
                                  </div>
                                </form>
                              ) || (
                                <div className="flex items-center rounded-xl border p-0"
                                >
                                  <button 
                                    className="w-full flex justify-center gap-2 text-gray-200 p-4 cursor-pointer bg-gray-500 hover:bg-gray-700 rounded-xl" 
                                    onClick={() => setIsCreating(true)}
                                  >
                                    <CirclePlus/>
                                    Add New Sub Curriculum
                                  </button>
                                </div>
                              )
                            )
                          )
                        }
                      </div>
                    )}
                  </div>
                ))}
              </div>
    )
}