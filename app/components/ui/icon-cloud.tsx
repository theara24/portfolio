'use client';

import * as React from 'react';
import { cn } from '@/app/lib/utils';
import { Cloud, fetchSimpleIcons, renderSimpleIcon } from 'react-icon-cloud';

type IconCloudProps = {
    iconSlugs: string[];
    className?: string;
};

export default function IconCloud({ iconSlugs, className }: IconCloudProps) {
    const [icons, setIcons] = React.useState<React.ReactElement[]>([]);
    const [loading, setLoading] = React.useState(true);

    React.useEffect(() => {
        let mounted = true;
        setLoading(true);
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
            setLoading(false);
        });
        return () => {
            mounted = false;
        };
    }, [iconSlugs]);

    return (
        <div
            className={cn('min-h-[420px] min-w-[420px] md:min-h-[520px] md:min-w-[520px] flex items-center justify-center', className)}
        >
            {loading ? (
                <div className="flex items-center justify-center h-full text-white">Loading...</div>
            ) : (
                <Cloud
                    key={icons.length} // force re-render when icons change
                    options={{
                        reverse: true,
                        depth: 0.8,
                        wheelZoom: false,
                        imageScale: 2,
                        activeCursor: 'default',
                        tooltip: 'native',
                        initial: [0.3, -0.3], // more dynamic initial rotation
                        maxSpeed: 0.05, // increased speed for visible rotation
                        minSpeed: 0.02, // increased min speed
                        radiusX: 180,
                        dragControl: true,
                        outlineColour: '#0000',
                    }}
                >
                    {icons}
                </Cloud>
            )}
        </div>
    );
}
