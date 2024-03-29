import React from 'react'

const SidebarItem = ({ title, classes, children }) => {
  return (
    <div className={classes || 'sidebar-single'}>
      {
                title ? (<h3 className='widget-title'>{title}</h3>) : null
            }
      <div className='sidebar-body'>
        {children}
      </div>
    </div>
  )
}

export default SidebarItem
