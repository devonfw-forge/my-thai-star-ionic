import { TestBed, inject } from '@angular/core/testing';
import { BookTableProvider } from './book-table';
import { BookingInfo } from '../../backendModels/interfaces';
import { HttpClientModule } from '@angular/common/http';

describe('BookTableProvider', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BookTableProvider],
      imports: [HttpClientModule],
    });
  });

  it('should create', inject(
    [BookTableProvider],
    (service: BookTableProvider) => {
      expect(service).toBeTruthy();
    },
  ));

  describe('Form composer', () => {
    it('should compose correctly booking info type booking', inject(
      [BookTableProvider],
      (service: BookTableProvider) => {
        const bookingData: any = {
          assistants: 2,
          name: 'name',
          email: 'email@email.com',
          bookingDate: '2017-06-28T17:31:00.000Z',
        };

        const bookingResult: BookingInfo = {
          booking: {
            bookingDate: '2017-06-28T17:31:00.000Z',
            name: 'name',
            email: 'email@email.com',
            bookingType: 0,
            assistants: 2,
          },
        };

        expect(service.composeBooking(bookingData, 0)).toEqual(bookingResult);
      },
    ));

    it('should compose correctly booking info type reservation', inject(
      [BookTableProvider],
      (service: BookTableProvider) => {
        const reservationData: any = {
          invitedGuests: ['email@email.com', 'email2@email.com'],
          name: 'name',
          email: 'email@email.com',
          bookingDate: '2017-06-28T17:31:00.000Z',
        };

        const reservationResult: BookingInfo = {
          booking: {
            bookingDate: '2017-06-28T17:31:00.000Z',
            name: 'name',
            email: 'email@email.com',
            bookingType: 1,
          },
          invitedGuests: [
            { email: 'email@email.com' },
            { email: 'email2@email.com' },
          ],
        };

        expect(service.composeBooking(reservationData, 1)).toEqual(
          reservationResult,
        );
      },
    ));
  });
});
