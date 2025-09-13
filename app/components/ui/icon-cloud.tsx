'use client';

import * as React from 'react';
import { cn } from '@/app/lib/utils';
import { Cloud, renderSimpleIcon, fetchSimpleIcons } from 'react-icon-cloud';

type IconCloudProps = {
    iconSlugs: string[];
    className?: string;
};

export default function IconCloud({ iconSlugs, className }: IconCloudProps) {
    const [icons, setIcons] = React.useState<React.ReactElement[]>([]);

    React.useEffect(() => {
        let mounted = true;
        fetchSimpleIcons({ slugs: iconSlugs }).then((res: any) => {
            if (!mounted) return;
            const list = Array.isArray(res)
                ? res
                : Array.isArray(res?.simpleIcons)
                    ? res.simpleIcons
                    : Object.values(res?.simpleIcons ?? res ?? {});

            const rendered = (list as any[]).map((icon: any) =>
                renderSimpleIcon({
                    icon,
                    size: 40,
                    fallbackHex: '#b3b9c5',
                    aProps: {
                        title: icon.title,
                    },
                })
            );
            setIcons(rendered);
        });
        return () => {
            mounted = false;
        };
    }, [iconSlugs]);

    return (
        <div
            className={cn('h-[420px] w-[420px] md:h-[520px] md:w-[520px]', className)}
        >
            <Cloud
                options={{
                    reverse: true,
                    depth: 0.8,
                    wheelZoom: false,
                    imageScale: 2,
                    activeCursor: 'default',
                    tooltip: 'native',
                    initial: [0.1, -0.1],
                    maxSpeed: 0.02,
                    minSpeed: 0.005,
                    radius: 180,
                    dragControl: true,
                    outlineColour: '#0000',
                }}
            >
                {icons}
            </Cloud>
        </div>
    );
}
