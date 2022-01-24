// Type assertion
let channel:any='Diego'

// let channelStr=<string>channel
let channelStr=channel as string

// const myCanvas=document.getElementById('main') as HTMLCanvasElement
const myCanvas=<HTMLCanvasElement>document.getElementById('canvas')