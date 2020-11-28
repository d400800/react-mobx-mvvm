export default async function AudienceWithSegmentsProvider() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({
                data: {
                    id: 10,
                    companyId: 1001,
                    updateDate: "2018-06-19T14:03:47.000Z",
                    name:"Nike leavers",
                    lifespanDays: 5,
                    excludedSegments: [],
                    includedSegments: [
                        [
                            {
                                id: "C2",
                                parentId: "C",
                                name: "Click",
                                numOfUsers: 13
                            },
                            {
                                id: "C7",
                                parentId: "C",
                                name:"Abandoned cart",
                                numOfUsers: 8
                            }
                        ]
                    ]
                }
            });
        }, 1000);
    });
}