export default function ChannelsSection({ formProps }) {
    const { register } = formProps

    return (
        <div className="rounded shadow overflow-hidden">
            <div className="bg-green-700 p-4 text-white rounded-t">
                <h3 className="font-semibold">Channels Requested</h3>
            </div>

            <div className="bg-white px-6 py-4">
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-y-4 gap-x-6">
                    <div className="flex items-center gap-2">
                        <input
                            type="checkbox"
                            id="jamatAnnouncement"
                            className="accent-yellow-500 w-4 h-4"
                            {...register("channels.jamatAnnouncement")}
                        />
                        <label htmlFor="jamatAnnouncement" className="cursor-pointer text-sm">
                            Jamati Announcement
                        </label>
                    </div>

                    <div className="flex items-center gap-2">
                        <input
                            type="checkbox"
                            id="ismailiInsight"
                            className="accent-yellow-500 w-4 h-4"
                            {...register("channels.ismailiInsight")}
                        />
                        <label htmlFor="ismailiInsight" className="cursor-pointer text-sm">
                            Ismaili Insight Newsletter
                        </label>
                    </div>

                    <div className="flex items-center gap-2">
                        <input
                            type="checkbox"
                            id="ismailiApp"
                            className="accent-yellow-500 w-4 h-4"
                            {...register("channels.ismailiApp")}
                        />
                        <label htmlFor="ismailiApp" className="cursor-pointer text-sm">
                            The Ismaili App
                        </label>
                    </div>

                    <div className="flex items-center gap-2">
                        <input
                            type="checkbox"
                            id="socialMedia"
                            className="accent-yellow-500 w-4 h-4"
                            {...register("channels.socialMedia")}
                        />
                        <label htmlFor="socialMedia" className="cursor-pointer text-sm">
                            Social Media (Facebook & Instagram)
                        </label>
                    </div>

                    <div className="flex items-center gap-2">
                        <input
                            type="checkbox"
                            id="graphicRequest"
                            className="accent-yellow-500 w-4 h-4"
                            {...register("channels.graphicRequest")}
                        />
                        <label htmlFor="graphicRequest" className="cursor-pointer text-sm">
                            Graphic Request
                        </label>
                    </div>
                </div>
            </div>
        </div>
    )
}
