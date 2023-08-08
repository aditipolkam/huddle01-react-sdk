import axios from "axios"

const API_KEY:string = import.meta.env.VITE_HUDDLE_API_KEY as string
const getRoomId = async(hostWallets:String[]) =>{
    const response = await axios.post(
        'https://api.huddle01.com/api/v1/create-room',
        {
          title: 'SoCon-Test',
          hostWallets: hostWallets,
        },
        {
          headers: {
            'Content-Type': 'application/json',
            'x-api-key': API_KEY,
          },
        }
    );
    return response.data.data.roomId
}


export default getRoomId
