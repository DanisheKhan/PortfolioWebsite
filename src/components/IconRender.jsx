const renderIcon = (tag) => {
  // If tag has a custom component property, use that
  if (tag.component) {
    const IconComponent = tag.icon;
    return <IconComponent className="size-10 text-blue-400" />;
  }

  // Otherwise use the image
  return (
    <img
      src={tag.path}
      alt={tag.name}
      className="rounded-lg size-10 hover-animation"
    />
  );
};