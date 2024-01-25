import React from 'react';
import Topbar from '../Common/Topbar';
import LeftMenu from '../Common/LeftMenu';
import Management from './Management';

function ManagementLayout() {
    return (
<div>
<Topbar />
<div className="contianer">
<LeftMenu />
<Management />
</div>
</div>
    )
}

export default ManagementLayout;