import {Routing} from "./Routing";

const URL = "http://localhost:8080"

export default class ServerRequests {

    static request(url, options = {}) {
        return fetch(url, options).then((response) => {
            if (!response.ok) {
                throw new Error(`HTTP error: ${response.status} ${response.body}`);
            }
            console.log(response);
            return response.json();
        });
    }
}

export class UserRequests extends ServerRequests {
    static async SignUp(payload) {
        let reqPath = URL + "/users/auth/signup"

        return await this.request(reqPath, {
            method: 'POST',
            body: JSON.stringify(payload),
            headers: {
                // 'Access-Control-Allow-Origin':  'http://localhost:3000',
                // 'Access-Control-Allow-Methods': 'POST',
                // 'Access-Control-Allow-Headers': 'Content-Type, Authentication',
                // 'Access-Control-Allow-Credentials': 'true',
                'Content-Type': 'application/json; charset=UTF-8'
            }
        });
    }

    static async SignIn(payload) {
        let reqPath = URL + "/users/auth/signin";

        return await this.request(reqPath, {
            method: "POST",
            headers: {
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify(payload)
        });
    }

    static async WhoAmI(token) {
        let reqPath = URL + "/users/auth/signup";

        return await this.request(reqPath, {
            method: "GET",
            headers: {
                'Authorization': token
            }
        });
    }

    static async LogOut(token) {
        let reqPath = URL + "/users/logout";

        return await this.request(reqPath, {
            method: "DELETE",
            headers: {
                'Authorization': token
            }
        });
    }

    static async PutInfo(token, payload, id) {
        const reqPath = URL + `/users/${id}`;
        return await this.request(reqPath, {
            method: 'PUT',
            headers: {
                "Content-type": "application/json; charset=UTF-8",
                'Authorization': token
            },
        body: JSON.stringify(payload)});
    }

    // static async PutOrder(payload, id) {
    //     let reqPath = Routing.get("orders").get("orderInfo", id);
    //     return await this.request(reqPath, {
    //         method: 'PUT',
    //         headers: {
    //             "Content-type": "application/json; charset=UTF-8"
    //         },
    //         body: JSON.stringify(payload)
    //     });
    // }

    // static async GetOrders() {
    //     let reqPath = URL + "/orders";

    //     return await this.request(reqPath, {
    //         method: 'GET'
    //     });
    // }

    // static async GetOrder(id) {
    //     let reqPath = Routing.get("orders").get("get", id);

    //     return await this.request(reqPath, {
    //         method: 'GET'
    //     });
    // }
    // static async PostOrder(payload, token) {
    //     let reqPath = URL + "/orders";
    //     return await this.request(reqPath, {
    //         method: 'POST',
    //         headers: {
    //             "Content-type": "application/json; charset=UTF-8",
    //             'Authorization': token
    //         },
    //         body: JSON.stringify(payload)
    //     });
    // }

    // static async PutOrderCourierId(id, courierId) {
    //     let reqPath = Routing.get("orders").get("putCourierId", id);
    //     return await this.request(reqPath, {
    //         method: 'PUT',
    //         headers: {
    //             "Content-type": "application/json; charset=UTF-8"
    //         },
    //         body: JSON.stringify({"courierId": courierId})
    //     });
    // }

    // static async DeleteOrder(token, id) {
    //     let reqPath = URL + `/orders/${id}`;
    //     console.log(reqPath);
    //     return await this.request(reqPath, {
    //         method: "DELETE",
    //         headers: {
    //             'Authorization': token
    //         }
    //     });
    // }

    // static async PostCourier(token, payload, orderId) {
    //     let reqPath = URL + `/couriers/${orderId}`;
    //     console.log(reqPath);
    //     return await this.request(reqPath, {
    //         method: 'POST',
    //         headers: {
    //             "Content-type": "application/json; charset=UTF-8",
    //             'Authorization': token
    //         },
    //         body: JSON.stringify(payload)
    //     });
    // }

    // static async PutCourier(token, payload, id) {
    //     let reqPath = URL + `/couriers/${id}`;
    //     return await this.request(reqPath, {
    //         method: 'PUT',
    //         headers: {
    //             "Content-type": "application/json; charset=UTF-8",
    //             'Authorization': token
    //         },
    //         body: JSON.stringify(payload)
    //     });
    // }

    // static async GetCouriers() {
    //     let reqPath = Routing.get("couriers").get("get");
    //     return await this.request(reqPath, {
    //         method: 'GET'
    //     });
    // }

    // static async GetCourierById(token, id) {
    //     let reqPath = URL + `/couriers/${id}`;
    //     return await this.request(reqPath, {
    //         method: 'GET',
    //         headers: {
    //             'Authorization': token
    //         }
    //     });
    // }

    // static async GetCourierOrders(token) {
    //     let reqPath = URL + `/couriers/${id}/orders`;
    //     console.log("GetUserPlants")
    //     console.log(reqPath);

    //     return await this.request(reqPath, {
    //         method: 'GET',
    //         headers: {
    //             'Authorization': token
    //         }
    //     });
    // }
}
