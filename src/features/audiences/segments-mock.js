export default async function SegmentsProvider() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({
                data: [
                    {
                        "id":"R1na",
                        "parent_id":"R",
                        "name":"Rule segment 1",
                        "num_of_users":1,
                        "lifespan_days":null,
                        "cost":0
                    },
                    {
                        "id":"R1nb",
                        "parent_id":"R",
                        "name":"Rule segment 2",
                        "num_of_users":3,
                        "lifespan_days":null,
                        "cost":0
                    },
                    {
                        "id":"C1",
                        "parent_id":"C",
                        "name":"Event segment 1",
                        "num_of_users":1,
                        "lifespan_days":null,
                        "cost":0
                    },
                    {
                        "id":"C2",
                        "parent_id":"C",
                        "name":"Event segment 2",
                        "num_of_users":1,
                        "lifespan_days":4,
                        "cost":0
                    }
                ]
            });
        }, 1000);
    });
}