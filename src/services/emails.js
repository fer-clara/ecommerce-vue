import { http } from './config'

export default {

    criar: (email, name) => {
        return http.post('newsletter', {
            email,
            name
        })
    }
}