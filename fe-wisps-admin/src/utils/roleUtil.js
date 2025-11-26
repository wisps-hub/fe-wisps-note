

const RoleUtil = {
    toOptions(role){
        return {
            value: role.id,
            label: role.title
        }
    }
}

export default RoleUtil;