import User from './user.model';
import { UserType } from './user.types';
import bcrypt from 'bcrypt';

const getAll = async(): Promise<[UserType]> => {
    const result = await User.find();
    result.forEach((element: UserType) => {
        element.password = '###########';
    });
    return result;
};

const getUser = async(id: string): Promise<UserType> => {
    const result = await User.findById(id);
    result.password = '###########';
    return result;
};

const addUser = async(data: UserType): Promise<UserType> => {
    if(data?.password) data.password = bcrypt.hashSync(data.password, 7);
    const result = await User.create(data);
    result.password = '###########';
    return result;
};

const updateUser = async(id: string, data: UserType): Promise<UserType> => {
    const result = await User.findByIdAndUpdate(id, data, {new: true});
    result.password = '###########';
    return result;
};

const deleteUser = async(id: string): Promise<boolean> => {
    const result = await User.deleteOne({_id: id});
    if (result.deletedCount > 0){
        return true;
    } else {
        return false;
    }

    
};

export {getAll, getUser, addUser, updateUser, deleteUser};