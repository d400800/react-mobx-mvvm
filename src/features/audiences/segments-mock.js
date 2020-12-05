export default async function SegmentsProvider() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({
                data: [
                    {
                        id: "R1",
                        parentId: "R",
                        name: "Homepage",
                        numOfUsers: 5887
                    },
                    {
                        id: "R2",
                        parentId: "R",
                        name: "Product page",
                        numOfUsers: 1666
                    },
                    {
                        id: "R3",
                        parentId: "R",
                        name: "About us page",
                        numOfUsers: 45
                    },
                    {
                        id: "R4",
                        parentId: "R",
                        name: "Thank you page",
                        numOfUsers: 69
                    },
                    {
                        id: "R5",
                        parentId: "R",
                        name: "Wishlist page",
                        numOfUsers: 411
                    },
                    {
                        id: "R6",
                        parentId: "R",
                        name: "Checkout page",
                        numOfUsers: 269
                    },
                    {
                        id: "R7",
                        parentId: "R",
                        name: "Cart page",
                        numOfUsers: 544
                    },
                    {
                        id: "C1",
                        parentId: "C",
                        name: "Product click",
                        numOfUsers: 2090
                    },
                    {
                        id: "C2",
                        parentId: "C",
                        name: "Add to cart",
                        numOfUsers: 344
                    },
                    {
                        id: "C3",
                        parentId: "C",
                        name: "Remove from cart",
                        numOfUsers: 91
                    },
                    {
                        id: "C4",
                        parentId: "C",
                        name: "Add to wishlist",
                        numOfUsers: 76
                    },
                    {
                        id: "C5",
                        parentId: "C",
                        name: "Remove from wishlist",
                        numOfUsers: 112
                    },
                    {
                        id: "C6",
                        parentId: "C",
                        name: "Phone purchase",
                        numOfUsers: 10
                    }
                ]
            });
        }, 1000);
    });
}