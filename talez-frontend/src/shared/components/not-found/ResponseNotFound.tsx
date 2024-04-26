interface ResponseNotFoundProps {
  icon: JSX.Element;
  title: string;
  description: string;
  buttonTrigger?: JSX.Element;
}

const ResponseNotFound = ({
  icon,
  title,
  description,
  buttonTrigger,
}: ResponseNotFoundProps) => {
  return (
    <>
      <div className="flex justify-center items-center h-full w-full">
        <div className="text-center">
          <div className="w-full mb-1">{icon}</div>
          <div className="mb-1">
            <div className="text-lg text-primary font-medium">{title}</div>
            <div className="text-sm text-muted-foreground">{description}</div>
          </div>
          {buttonTrigger ? <div>{buttonTrigger}</div> : null}
        </div>
      </div>
    </>
  );
};

export default ResponseNotFound;
