import React, { useEffect, useState } from 'react'
import { listCustomerApi } from '../services/api'

function CustomerList() {

    const [customers, setCustomers] = useState()

    async function fetchAllCustomers() {

        let res = await listCustomerApi()

        if (res.status > 199 && res.status < 300) {

            setCustomers(res.data)

            // console.log(customers);
        }
    }

    useEffect(() => {

        fetchAllCustomers()
    }, [])
    return (
        <div>

            {customers && customers.map((c,i)=><div>{c.name} {c.phone} {c.email}</div>)}

        </div>
    )
}

export default CustomerList
