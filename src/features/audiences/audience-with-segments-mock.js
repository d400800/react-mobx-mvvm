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
                                id: "R5",
                                parentId: "R",
                                name: "Wishlist page",
                                numOfUsers: 411
                            },
                            {
                                id: "C5",
                                parentId: "C",
                                name: "Remove from wishlist",
                                numOfUsers: 112
                            }
                        ]
                    ]
                }
            });
        }, 1000);
    });
}