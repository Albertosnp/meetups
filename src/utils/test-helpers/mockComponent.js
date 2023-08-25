/**
 * Helper used to avoid create great snapshots:
 *
 * @param name {String}: Name of the component.
 * @param props {Object}: The props of the component.
 * @param stringifyProps {Boolean}: Needed to avoid circular object that cannot be stringified
 *
 * @return {Component}
 */
export const mockComponent = (name, props, stringifyProps = true, propRendering = () => {}) => {
  const { children, ...restOfProps } = props;

  return (
    <code
      name={name}
      aria-label={name}
      props={stringifyProps ? JSON.stringify(restOfProps).replace(/"/g, "'") : restOfProps}
    >
      {propRendering(props) || children}
    </code>
  );
};
