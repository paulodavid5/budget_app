import { redirect } from 'react-router-dom';

//library
import { toast } from 'react-toastify';

//helpers
import { deleteItem } from '../helpers';

export async function logoutAction() {
    //delete user
    deleteItem({
        key: 'userName'
    })
    toast.success("You have deleted your account!")
    //return main page
    return redirect('/')
}