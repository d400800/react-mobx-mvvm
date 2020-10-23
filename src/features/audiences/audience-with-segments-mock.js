export default async function AudienceWithSegmentsProvider() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({
                data: {
                    "id":15717,
                    "company_id":5258,
                    "categories":[
                        [
                            "0TG",
                            "G"
                        ]
                    ],
                    "update_date":"2018-06-19T14:03:47.000Z",
                    "name":"Nike leavers",
                    "lifespan_days":5,
                    "excluded":[

                    ],
                    "included":[
                        [
                            {
                                "id":"0TG",
                                "parent_id":"0",
                                "name":"Nike lovers",
                                "num_of_users":13,
                                "alias":null,
                                "cost":0,
                                "lifespan_days":null,
                                "segment_weight":1
                            },
                            {
                                "id":"G",
                                "parent_id":"R",
                                "name":"Abandoned cart",
                                "num_of_users":8,
                                "alias":null,
                                "cost":0,
                                "lifespan_days":null,
                                "segment_weight":1
                            }
                        ]
                    ]
                }
            });
        }, 1000);
    });
}