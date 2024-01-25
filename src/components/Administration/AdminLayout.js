import React from 'react';
import Topbar from '../Common/Topbar';
import LeftMenu from '../Common/LeftMenu';
import Administration from './Administration';

function AdminLayout() {
    return (
<div>
<Topbar />
<div className="contianer">
<LeftMenu />
< Administration />
</div>
</div>
    )
}

export default AdminLayout;