import { MultiClassValueHandler } from './multi-class-value-handler';
import { EnumValueHandler } from './enum-value-handler';
import { ValueHandler } from '../types/value-handler.interface';
import { PropertyDto } from '../types/property-dto.interface';
import { EnumObject, MultiClass, ObjectLiteral } from '../types/fixture-options.type';

export class ObjectLiteralValueHandler<P extends ObjectLiteral> implements ValueHandler<P> {
  public shouldHandle(propertyDto: PropertyDto<P>): boolean {
    return (
      propertyDto.type === 'object' &&
      !MultiClassValueHandler.isTypeValue((propertyDto as unknown) as PropertyDto<MultiClass>) &&
      !EnumValueHandler.isEnumValue((propertyDto as unknown) as PropertyDto<EnumObject>)
    );
  }

  public produceValue<T>(propertyDto: PropertyDto<P>): any {
    return propertyDto.value;
  }
}
