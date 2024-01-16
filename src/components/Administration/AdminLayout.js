import React from 'react';
import Topbar from '../Common/Topbar';
import LeftMenu from '../Common/LeftMenu';

function AdminLayout() {
    return (
<div>
<Topbar />
<div className="contianer">
<LeftMenu />

</div>
</div>
    )
}

export default AdminLayout;