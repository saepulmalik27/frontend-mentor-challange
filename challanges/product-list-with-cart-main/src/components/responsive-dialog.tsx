import * as React from 'react'
import { Dialog, DialogContent } from '@/components/ui/dialog'
import {
    Drawer,
    DrawerContent,
} from '@/components/ui/drawer'
import { useMediaQuery } from '@/hooks/use-media-query'
import { ScrollArea } from '@/components/ui/scroll-area'

export function ResponsiveDialog({
    children,
    isOpen,
    setIsOpen,
}: {
    children: React.ReactNode
    isOpen: boolean
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
}) {
    const isDesktop = useMediaQuery('(min-width: 768px)')

    if (isDesktop) {
        return (
            <Dialog open={isOpen} onOpenChange={setIsOpen}>
                <DialogContent className="sm:max-w-[592px]">
                    {children}
                </DialogContent>
            </Dialog>
        )
    }

    return (
        <Drawer open={isOpen} onOpenChange={setIsOpen}>
            <DrawerContent>
                <ScrollArea className='h-[90vh]'>
                {children}

                </ScrollArea>
            </DrawerContent>
        </Drawer>
    )
}
