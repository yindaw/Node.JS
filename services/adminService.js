// 管理员初始化
// 判断数据库中是否有管理员，如果没有，自动添加一个默认管理员
const md5 = require("md5");
const Admin = require("../models/Admin");
const Student = require("../models/Student");
exports.addAdmin = async function (adminObj) {
    // 应该判断adminObj的各种属性是否合理，
   adminObj.loginPwd = md5(adminObj.loginPwd);
   const ins = await Admin.create(adminObj);
   return ins.toJSON();
}

exports.deleteAdmin = async function (adminId) {
    //方式1
    //1.得到实例
    // const ins = await Admin.findByPk(adminId);
    // // 2.删除实例
    // if (ins) {
    //     await ins.destroy();
    // }



    //方式2
    const result = await Admin.destroy({
        where: { 
            id: adminId
        }
    });
}

exports.updateAdmin = async function (id, adminObj) {
    //方式1
    //1.得到实例
    // const ins = await Admin.findByPk(id);
    // ins.loginId = adminObj.loginId;
    // //2.保存
    // ins.save();


    //方式2
    if (adminObj.loginPwd) {
        adminObj.loginPwd = md5(adminObj.loginPwd);
    }
    const result = await Admin.update(adminObj, {
        where: {
           id
        }
    });
    return result;
};










exports.login = async function (loginId, loginPwd) {
    loginPwd = md5(loginPwd);
    const result = await Admin.findOne({
        where: {
            loginId,
            loginPwd
        }
    });
    if (result && result.loginId === loginId) {
        return result.toJSON();
    }
    return null;
}


exports.getAdminById = async function (id) {
    const result = await Admin.findByPk(id);
    if (result) {
        return result.toJSON();
    }
    return null;
}

