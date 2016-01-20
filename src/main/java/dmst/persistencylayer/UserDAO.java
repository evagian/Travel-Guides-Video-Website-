/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package dmst.persistencylayer;

import javabeans.UserBean;
import dmst.transferobjects.UserTO;


public interface UserDAO {
    
     public boolean checkIfEmailExists(UserTO user);
     public boolean sign_up(UserTO user);
     public UserBean sign_in(UserTO user);
    
}
