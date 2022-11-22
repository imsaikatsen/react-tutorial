export default function Text({addEmoji}){
    const text = 'I am JAvaScript Programming Language.';
    return <div> {addEmoji ? addEmoji(text, '♥') : text  }</div>;
}