const { NextResponse } = require("next/server")

export const config = {
    runtime: 'edge'
}

const handler = (req) => {
    return NextResponse.json({
        name: `Hello from ${req.url} I'm now an edge function!`
    })
}

export default handler;