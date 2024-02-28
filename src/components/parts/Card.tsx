import {
    Card,
    CardContent,
    CardDescription,
    CardTitle,
    CardHeader,
    CardFooter
} from '../ui/card';
import {
    Button
} from '../ui/button';
import Link from 'next/link';
import { DevPost } from '@/lib/newt';

export default function DevCard({content}: {content:DevPost}) {
    return (
        <Card>
            <CardHeader>
                <CardTitle>
                    {content.title}
                </CardTitle>
            </CardHeader>
            <CardContent>
                <CardDescription>
                    {content.subtitle}
                </CardDescription>
                {content.img.length !== 0 &&<img src={content.img[0].src} alt={content.description} />}
            </CardContent>
            <CardFooter>
                <Link legacyBehavior href={content.url !== undefined ? content.url.url : ""}>
                    <Button>
                        詳細を見る
                    </Button>
                </Link>
            </CardFooter>
        </Card>
    )
}