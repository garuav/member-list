import memberData from './members.json';

   export const  getMemberDetails  = (): Promise<any> => {
        
        return new Promise((resolve, reject) => {
            try {
                
                resolve({status: true, data: [...memberData.members]});

            } catch (e) {
                reject({status: false, message: 'Something went wrong please try againg later.'})
            }
        })
    }
