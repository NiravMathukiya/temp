"use client"

export default function JamatkhanaSection({ formProps }) {
    const { register, setValue } = formProps

    return (
        <div className="form-section visible">
            <div className="bg-green-700 p-4 rounded text-white">
                <h3 className="font-semibold">Select Jamatkhanas</h3>
            </div>

            <div className="bg-white p-6 rounded shadow">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    <div>
                        <div className="flex justify-between mb-2">
                            <h4 className="font-semibold">ACST</h4>
                            <button
                                type="button"
                                className="text-sm text-blue-600 hover:underline"
                                onClick={() => {
                                    setValue("jamatkhanas.acstCorpusChristi", true)
                                    setValue("jamatkhanas.acstSanAntonio", true)
                                }}
                            >
                                Select All
                            </button>
                        </div>
                        <div className="border border-gray-300 rounded p-2">
                            <div className="flex items-center mb-2">
                                <input
                                    type="checkbox"
                                    id="acstCorpusChristi"
                                    className="mr-2"
                                    {...register("jamatkhanas.acstCorpusChristi")}
                                />
                                <label htmlFor="acstCorpusChristi">Corpus Christi</label>
                            </div>
                            <div className="flex items-center">
                                <input
                                    type="checkbox"
                                    id="acstSanAntonio"
                                    className="mr-2"
                                    {...register("jamatkhanas.acstSanAntonio")}
                                />
                                <label htmlFor="acstSanAntonio">San Antonio</label>
                            </div>
                        </div>
                    </div>

                    <div>
                        <div className="flex justify-between mb-2">
                            <h4 className="font-semibold">ACCT</h4>
                            <button
                                type="button"
                                className="text-sm text-blue-600 hover:underline"
                                onClick={() => {
                                    setValue("jamatkhanas.acctCollegeStation", true)
                                    setValue("jamatkhanas.acctAustinSouth", true)
                                    setValue("jamatkhanas.acctAustin", true)
                                }}
                            >
                                Select All
                            </button>
                        </div>
                        <div className="border border-gray-300 rounded p-2">
                            <div className="flex items-center mb-2">
                                <input
                                    type="checkbox"
                                    id="acctCollegeStation"
                                    className="mr-2"
                                    {...register("jamatkhanas.acctCollegeStation")}
                                />
                                <label htmlFor="acctCollegeStation">College Station</label>
                            </div>
                            <div className="flex items-center mb-2">
                                <input
                                    type="checkbox"
                                    id="acctAustinSouth"
                                    className="mr-2"
                                    {...register("jamatkhanas.acctAustinSouth")}
                                />
                                <label htmlFor="acctAustinSouth">Austin South</label>
                            </div>
                            <div className="flex items-center">
                                <input type="checkbox" id="acctAustin" className="mr-2" {...register("jamatkhanas.acctAustin")} />
                                <label htmlFor="acctAustin">Austin</label>
                            </div>
                        </div>
                    </div>

                    <div>
                        <div className="flex justify-between mb-2">
                            <h4 className="font-semibold">GREATER HOUSTON</h4>
                            <button
                                type="button"
                                className="text-sm text-blue-600 hover:underline"
                                onClick={() => {
                                    setValue("jamatkhanas.ghClearLake", true)
                                    setValue("jamatkhanas.ghKaty", true)
                                    setValue("jamatkhanas.ghHeadquarters", true)
                                    setValue("jamatkhanas.ghPrincipal", true)
                                    setValue("jamatkhanas.ghHarvestGreen", true)
                                    setValue("jamatkhanas.ghSugarLand", true)
                                    setValue("jamatkhanas.ghBeaumont", true)
                                    setValue("jamatkhanas.ghSpring", true)
                                }}
                            >
                                Select All
                            </button>
                        </div>
                        <div className="border border-gray-300 text-[#404040] rounded p-2">
                            <div className="grid grid-cols-2 gap-2">
                                <div className="flex items-center">
                                    <input type="checkbox" id="ghClearLake" className="mr-2" {...register("jamatkhanas.ghClearLake")} />
                                    <label htmlFor="ghClearLake">Clear Lake</label>
                                </div>
                                <div className="flex items-center">
                                    <input type="checkbox" id="ghKaty" className="mr-2" {...register("jamatkhanas.ghKaty")} />
                                    <label htmlFor="ghKaty">Katy</label>
                                </div>
                                <div className="flex items-center">
                                    <input
                                        type="checkbox"
                                        id="ghHeadquarters"
                                        className="mr-2"
                                        {...register("jamatkhanas.ghHeadquarters")}
                                    />
                                    <label htmlFor="ghHeadquarters">Headquarters</label>
                                </div>
                                <div className="flex items-center">
                                    <input type="checkbox" id="ghPrincipal" className="mr-2" {...register("jamatkhanas.ghPrincipal")} />
                                    <label htmlFor="ghPrincipal">Principal</label>
                                </div>
                                <div className="flex items-center">
                                    <input
                                        type="checkbox"
                                        id="ghHarvestGreen"
                                        className="mr-2"
                                        {...register("jamatkhanas.ghHarvestGreen")}
                                    />
                                    <label htmlFor="ghHarvestGreen">Harvest Green</label>
                                </div>
                                <div className="flex items-center">
                                    <input type="checkbox" id="ghSugarLand" className="mr-2" {...register("jamatkhanas.ghSugarLand")} />
                                    <label htmlFor="ghSugarLand">Sugar Land</label>
                                </div>
                                <div className="flex items-center">
                                    <input type="checkbox" id="ghBeaumont" className="mr-2" {...register("jamatkhanas.ghBeaumont")} />
                                    <label htmlFor="ghBeaumont">Beaumont</label>
                                </div>
                                <div className="flex items-center">
                                    <input type="checkbox" id="ghSpring" className="mr-2" {...register("jamatkhanas.ghSpring")} />
                                    <label htmlFor="ghSpring">Spring</label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-6">
                    <label htmlFor="comment" className="block text-sm font-medium text-gray-700 mb-1">
                        Comment
                    </label>
                    <textarea
                        id="comment"
                        rows={3}
                        className="w-full p-2 border border-gray-300 rounded"
                        {...register("comment")}
                    />
                </div>
            </div>
        </div>
    )
}
