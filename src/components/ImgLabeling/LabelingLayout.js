import React from 'react';
import Topbar from '../Common/Topbar';
import LeftMenu from '../Common/LeftMenu';
import Workspace from '../ImgLabeling/Workspace'

function LabelingLayout() {
    return (
<div>
<Topbar />
<div className="contianer">
<LeftMenu />
<Workspace/>
</div>
</div>
    )
}

export default LabelingLayout;