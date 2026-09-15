import { CircleAlert } from 'lucide-preact';
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogMedia,
} from "@/components/ui/AlertDialog";
import type { useConfirm } from "@/hooks/useConfirm";

type Props = Pick<ReturnType<typeof useConfirm>, "dialogProps" | "onAction">;

export default function NutritionWarningDialog({ dialogProps, onAction }: Props) {
    return (
        <AlertDialog {...dialogProps}>
            <AlertDialogContent>
                <AlertDialogHeader>
                    <AlertDialogMedia><CircleAlert /></AlertDialogMedia>
                    <AlertDialogTitle>Are you sure?</AlertDialogTitle>
                    <AlertDialogDescription>
                        <p>The script can't get the nutrition facts per 100g, because they are not selected.</p>
                        <p>If you continue, the nutrition facts will be <em>per serving</em>.</p>
                        <p>If you want to get correct nutrition facts per 100g, please cancel this and select the button 'Por 100 g'.</p>
                    </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                    <AlertDialogAction onClick={onAction}>Continue with nutrition facts per serving</AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    );
}