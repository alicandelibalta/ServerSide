module.exports = class AdminRepository {
    get(adminId) {
      throw new Error("ERR_METHOD_NOT_IMPLEMENTED");
    }
  
    remove(userId) {
      throw new Error('ERR_METHOD_NOT_IMPLEMENTED');
    }
  
    updateUser (userId) {
      throw new Error('ERR_METHOD_NOT_IMPLEMENTED');
    }
  
    getByEmail(email) {
      throw new Error("ERR_METHOD_NOT_IMPLEMENTED");
    }
  
    createUser () {
      throw new Error("ERR_METHOD_NOT_IMPLEMENTED");
    }
    
    //birden fazla kullanıcıyı bulmak için.
    find() {
      throw new Error('ERR_METHOD_NOT_IMPLEMENTED');
    }
  };
  